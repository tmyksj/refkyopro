# AtCoder Beginner Contest 133
## B - Good Distance
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, d;
    cin >> n >> d;

    vector<vector<int>> x(n, vector<int>(d));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < d; j++) {
            cin >> x[i][j];
        }
    }

    int cnt = 0;
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            int dis2 = 0;
            for (int k = 0; k < d; k++) {
                dis2 += (x[i][k] - x[j][k]) * (x[i][k] - x[j][k]);
            }

            for (int k = 1; k * k <= dis2; k++) {
                if (k * k == dis2) {
                    cnt++;
                }
            }
        }
    }

    cout << cnt << endl;
}
```
