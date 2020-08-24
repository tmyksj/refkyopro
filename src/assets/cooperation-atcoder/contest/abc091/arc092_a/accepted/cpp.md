# AtCoder Beginner Contest 091
## C - 2D Plane 2N Points
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    const int red = 0, blue = 1;

    int n;
    cin >> n;

    vector<int> y(2 * n, 2 * n), clr(2 * n);
    for (int i = 0; i < n; i++) {
        int a, b;
        cin >> a >> b;
        y[a] = b;
        clr[a] = red;
    }

    for (int i = 0; i < n; i++) {
        int c, d;
        cin >> c >> d;
        y[c] = d;
        clr[c] = blue;
    }

    int res = 0;
    for (int i = 0; i < 2 * n; i++) {
        if (clr[i] == blue) {
            int x = -1, h = -1;
            for (int j = 0; j < i; j++) {
                if (clr[j] == red && h < y[j] && y[j] < y[i]) {
                    x = j;
                    h = y[j];
                }
            }

            if (x != -1) {
                y[x] = 2 * n;
                res++;
            }
        }
    }

    cout << res << endl;
}
```
