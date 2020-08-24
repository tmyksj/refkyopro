# AtCoder Beginner Contest 071
## D - Coloring Dominoes
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<string> d(2);
    cin >> d[0] >> d[1];

    int idx = 0;
    long long res = 1;
    if (d[0][0] == d[1][0]) {
        idx += 1;
        res *= 3;
    } else {
        idx += 2;
        res *= 6;
    }

    while (idx < n) {
        if (d[0][idx - 1] == d[1][idx - 1]) {
            if (d[0][idx] == d[1][idx]) {
                idx += 1;
                res *= 2;
            } else {
                idx += 2;
                res *= 2;
            }
        } else {
            if (d[0][idx] == d[1][idx]) {
                idx += 1;
                res *= 1;
            } else {
                idx += 2;
                res *= 3;
            }
        }

        res %= 1000000007;
    }

    cout << res << endl;
}
```
