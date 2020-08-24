# AtCoder Beginner Contest 107
## B - Grid Compression
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int h, w;
    cin >> h >> w;

    vector<string> a(h);
    for (int i = 0; i < h; i++) {
        cin >> a[i];
    }

    vector<int> cnt_r(h, 0), cnt_c(w, 0);
    for (int i = 0; i < h; i++) {
        for (int j = 0; j < w; j++) {
            if (a[i][j] == '.') {
                cnt_r[i]++;
                cnt_c[j]++;
            }
        }
    }

    for (int i = 0; i < h; i++) {
        for (int j = 0; j < w; j++) {
            if (cnt_r[i] < w && cnt_c[j] < h) {
                cout << a[i][j];
            }
        }

        if (cnt_r[i] < w) {
            cout << endl;
        }
    }
}
```
