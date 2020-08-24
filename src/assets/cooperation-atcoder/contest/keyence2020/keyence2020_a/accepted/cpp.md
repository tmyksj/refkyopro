# キーエンス プログラミング コンテスト 2020
## A - Painting
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int h, w, n;
    cin >> h >> w >> n;

    int res = h * w;
    for (int i = 0; i <= h; i++) {
        for (int j = 0; j <= w; j++) {
            if (h * w - (h - i) * (w - j) >= n) {
                res = min(res, i + j);
            }
        }
    }

    cout << res << endl;
}
```
