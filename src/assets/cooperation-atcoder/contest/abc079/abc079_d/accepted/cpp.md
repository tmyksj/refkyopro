# AtCoder Beginner Contest 079
## D - Wall
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int h, w;
    cin >> h >> w;

    vector<vector<int>> c(10, vector<int>(10));
    for (int i = 0; i < 10; i++) {
        for (int j = 0; j < 10; j++) {
            cin >> c[i][j];
        }
    }

    for (int i = 0; i < 10; i++) {
        for (int j = 0; j < 10; j++) {
            for (int k = 0; k < 10; k++) {
                if (c[j][k] > c[j][i] + c[i][k]) {
                    c[j][k] = c[j][i] + c[i][k];
                }
            }
        }
    }

    int res = 0;
    for (int i = 0; i < h * w; i++) {
        int a;
        cin >> a;

        if (a != -1) {
            res += c[a][1];
        }
    }

    cout << res << endl;
}
```
