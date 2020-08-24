# Introduction to Heuristics Contest
## A - AtCoder Contest Scheduling
```cpp
#include <algorithm>
#include <chrono>
#include <functional>
#include <iostream>
#include <random>
#include <vector>

using namespace std;

template <class T, class U>
class genetic_algorithm {
    int size;
    function<T()> generator;
    function<U(T&)> evaluator;
    function<int(vector<U>&)> selector;

    function<void(T&, T&)> operator_crossover;
    function<void(T&)> operator_mutation;

    int weight_selection;
    int weight_crossover;
    int weight_mutation;

    function<T(T&)> cloner_t;

    default_random_engine engine;

    vector<T> generation;
    vector<U> evaluation;

public:
    genetic_algorithm(int size,
            function<T()> generator,
            function<U(T&)> evaluator,
            function<int(vector<U>&)> selector) {
        this->size = size;
        this->generator = generator;
        this->evaluator = evaluator;
        this->selector = selector;

        this->weight_selection = 1;
        this->weight_crossover = 0;
        this->weight_mutation = 0;

        this->cloner_t = [](T& t) -> T {
            return t;
        };

        random_device device;
        this->engine = default_random_engine(device());
    }

    void set_operator_crossover(function<void(T&, T&)> operator_crossover) {
        this->operator_crossover = operator_crossover;
    }

    void set_operator_mutation(function<void(T&)> operator_mutation) {
        this->operator_mutation = operator_mutation;
    }

    void set_weight_selection(int weight_selection) {
        this->weight_selection = weight_selection;
    }

    void set_weight_crossover(int weight_crossover) {
        this->weight_crossover = weight_crossover;
    }

    void set_weight_mutation(int weight_mutation) {
        this->weight_mutation = weight_mutation;
    }

    void set_cloner_t(function<T(T&)> cloner_t) {
        this->cloner_t = cloner_t;
    }

    void initialize() {
        generation = vector<T>(size);
        evaluation = vector<U>(size);
        for (int i = 0; i < size; i++) {
            generation[i] = generator();
            evaluation[i] = evaluator(generation[i]);
        }
    }

    void next() {
        vector<T> next_generation(size);
        for (int i = 0; i < size; i++) {
            int op = uniform_int_distribution<int>(
                    0, weight_selection + weight_crossover + weight_mutation - 1)(engine);
            if (op < weight_mutation) {
                next_generation[i] = cloner_t(generation[selector(evaluation)]);
                operator_mutation(next_generation[i]);
            } else if (op < weight_mutation + weight_crossover && i < size - 1) {
                next_generation[i] = cloner_t(generation[selector(evaluation)]);
                next_generation[i + 1] = cloner_t(generation[selector(evaluation)]);
                operator_crossover(next_generation[i], next_generation[i + 1]);
                i++;
            } else {
                next_generation[i] = generation[selector(evaluation)];
            }
        }

        generation = next_generation;
        for (int i = 0; i < size; i++) {
            evaluation[i] = evaluator(generation[i]);
        }
    }

    T result(function<bool(U, U)> comparator) {
        int res = 0;
        for (int i = 1; i < size; i++) {
            if (comparator(evaluation[i], evaluation[res])) {
                res = i;
            }
        }

        return generation[res];
    }
};

int main() {
    chrono::system_clock::time_point start = chrono::system_clock::now();

    int c_size = 26;
    int ga_size = 10;
    int ga_selection_weight = 1;
    int ga_mutation_weight = 1;
    int ga_mutation_rate = 365;

    random_device device;
    default_random_engine engine(device());

    int d;
    cin >> d;

    vector<long long> c(c_size);
    for (int i = 0; i < c_size; i++) {
        cin >> c[i];
    }

    vector<vector<long long>> s(d, vector<long long>(c_size));
    for (int i = 0; i < d; i++) {
        for (int j = 0; j < c_size; j++) {
            cin >> s[i][j];
        }
    }

    genetic_algorithm<vector<int>, long long> ga(ga_size, [&]() -> vector<int> {
        vector<int> res(d);
        for (int i = 0; i < d; i++) {
            res[i] = uniform_int_distribution<int>(0, c_size - 1)(engine);
        }

        return res;
    }, [&](vector<int>& t) -> long long {
        long long res = 0;

        vector<int> last(c_size, -1);
        for (int i = 0; i < d; i++) {
            last[t[i]] = i;
            res += s[i][t[i]];
            for (int j = 0; j < c_size; j++) {
                res -= c[j] * (i - last[j]);
            }
        }

        return res;
    }, [&](vector<long long>& v) -> int {
        vector<pair<long long, int>> w(ga_size);
        for (int i = 0; i < ga_size; i++) {
            w[i] = make_pair(v[i], i);
        }

        sort(w.begin(), w.end(), greater<pair<long long, int>>());
        return w[uniform_int_distribution<int>(0, ga_size / 4)(engine)].second;
    });

    ga.set_cloner_t([&](vector<int>& t) -> vector<int> {
        return vector<int>(t);
    });

    ga.set_weight_selection(ga_selection_weight);
    ga.set_weight_mutation(ga_mutation_weight);

    ga.set_operator_mutation([&](vector<int>& t) -> void {
        for (int i = 0; i < d; i++) {
            if (uniform_int_distribution<int>(0, ga_mutation_rate - 1)(engine) == 0) {
                t[i] = uniform_int_distribution<int>(0, c_size - 1)(engine);
            }
        }
    });

    ga.initialize();
    while (chrono::duration_cast<chrono::milliseconds>(chrono::system_clock::now() - start).count() < 1950) {
        ga.next();
    }

    vector<int> res = ga.result(greater<int>());
    for (int i = 0; i < d; i++) {
        cout << res[i] + 1 << endl;
    }
}
```
