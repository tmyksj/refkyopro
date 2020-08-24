# AtCoder Beginner Contest 109
## D - Make Them Even
```cpp
#include <iostream>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int h, w;
    cin >> h >> w;

    vector<vector<int>> a(h, vector<int>(w));
    for (int i = 0; i < h; i++) {
        for (int j = 0; j < w; j++) {
            cin >> a[i][j];
        }
    }

    vector<pair<pair<int, int>, pair<int, int>>> op(0);
    for (int i = 0; i < h; i++) {
        for (int j = 0; j < w; j++) {
            if (a[i][j] % 2 == 1) {
                a[i][j]--;

                if (j < w - 1) {
                    a[i][j + 1]++;
                    op.push_back(make_pair(make_pair(i, j), make_pair(i, j + 1)));
                } else if (i < h - 1) {
                    a[i + 1][j]++;
                    op.push_back(make_pair(make_pair(i, j), make_pair(i + 1, j)));
                }
            }
        }
    }

    cout << op.size() << endl;
    for (int i = 0; i < static_cast<int>(op.size()); i++) {
        cout << op[i].first.first + 1 << " " << op[i].first.second + 1
            << " " << op[i].second.first + 1 << " " << op[i].second.second + 1 << endl;
    }
}
```
