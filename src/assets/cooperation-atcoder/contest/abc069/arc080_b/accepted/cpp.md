# AtCoder Beginner Contest 069
## D - Grid Coloring
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int h, w, n;
    cin >> h >> w >> n;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    vector<vector<int>> grid(h, vector<int>(w));
    for (int i = 0, ih = 0, iw = 0; i < n; i++) {
        for (int j = 0; j < a[i]; j++) {
            grid[ih][iw] = i + 1;

            if (ih % 2 == 0) {
                if (iw == w - 1) {
                    ih++;
                } else {
                    iw++;
                }
            } else {
                if (iw == 0) {
                    ih++;
                } else {
                    iw--;
                }
            }
        }
    }

    for (int i = 0; i < h; i++) {
        for (int j = 0; j < w; j++) {
            cout << (j == 0 ? "" : " ") << grid[i][j];
        }
        cout << endl;
    }
}
```
