# AtCoder Beginner Contest 126
## C - Dice and Coin
```cpp
#include <iomanip>
#include <iostream>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    double sum = 0;
    for (int i = 1; i <= n; i++) {
        int toss = 0;
        for (int j = i; j < k; j *= 2) {
            toss++;
        }
        sum += 1.0 / ((1 << toss) * n);
    }

    cout << setprecision(12) << fixed << sum << endl;
}
```
