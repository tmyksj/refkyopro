# AtCoder Regular Contest 023
## B - 謎の人物X
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int r, c, d;
    cin >> r >> c >> d;

    vector<vector<int>> a(r, vector<int>(c));
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            cin >> a[i][j];
        }
    }

    int res = 0;
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            if (i + j <= d && (i + j) % 2 == d % 2) {
                res = max(res, a[i][j]);
            }
        }
    }

    cout << res << endl;
}
```
