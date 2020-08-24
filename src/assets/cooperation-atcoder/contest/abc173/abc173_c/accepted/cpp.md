# AtCoder Beginner Contest 173
## C - H and V
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int h, w, k;
    cin >> h >> w >> k;

    vector<string> c(h);
    for (int i = 0; i < h; i++) {
        cin >> c[i];
    }

    int res = 0;
    for (int i = 0; i < (1 << (h + w)); i++) {
        int r = 0;
        for (int j = 0; j < h * w; j++) {
            if ((i & (1 << (j / w))) == 0 && (i & (1 << (h + j % w))) == 0 && c[j / w][j % w] == '#') {
                r++;
            }
        }

        if (r == k) {
            res++;
        }
    }

    cout << res << endl;
}
```
