# CADDi 2018 for Beginners
## C - Product and GCD
```cpp
#include <iostream>
#include <map>

using namespace std;

int main() {
    long long n, p;
    cin >> n >> p;

    map<long long, long long> m;
    for (long long i = 2, j = p; i * i <= p; i++) {
        m.erase(j);

        for (; j % i == 0; j /= i) {
            m[i]++;
        }
        if (i < j) {
            m[j]++;
        }
    }

    long long res = 1;
    for (map<long long, long long>::iterator i = m.begin(); i != m.end(); i++) {
        for (int j = 0; j < i->second / n; j++) {
            res *= i->first;
        }
    }

    cout << res << endl;
}
```
