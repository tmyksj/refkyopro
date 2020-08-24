# AtCoder Beginner Contest 152
## D - Handstand 2
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<vector<long long>> c(10, vector<long long>(10, 0));
    for (int i = 1; i <= n; i++) {
        int l = i;
        while (l >= 10) {
            l /= 10;
        }

        int r = i % 10;
        c[l][r]++;
    }

    long long res = 0;
    for (int i = 0; i < 10; i++) {
        for (int j = 0; j < 10; j++) {
            res += c[i][j] * c[j][i];
        }
    }

    cout << res << endl;
}
```
