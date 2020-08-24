# AtCoder Beginner Contest 169
## D - Div Game
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    long long n;
    cin >> n;

    vector<int> p(0), e(0);
    for (long long i = 2, j = n; ; i++) {
        if (j % i == 0) {
            p.push_back(i);
            e.push_back(0);
            while (j % i == 0) {
                e[e.size() - 1]++;
                j /= i;
            }
        }

        if (j == 1) {
            break;
        } else if (i * i > j) {
            p.push_back(j);
            e.push_back(1);
            break;
        }
    }

    long long res = 0;
    for (int i = 0; i < static_cast<int>(e.size()); i++) {
        for (int j = 1; ; j++) {
            if ((j + 1) * (j + 2) / 2 > e[i]) {
                res += j;
                break;
            }
        }
    }

    cout << res << endl;
}
```
