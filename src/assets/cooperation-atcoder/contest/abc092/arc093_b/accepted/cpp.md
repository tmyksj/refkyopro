# AtCoder Beginner Contest 092
## D - Grid Components
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;

    int h = 100, w = 100;
    vector<vector<int>> grid(h, vector<int>(w, 0));
    for (int i = 0; i < h / 2; i++) {
        for (int j = 0; j < w; j++) {
            grid[i][j] = 1;
        }
    }

    for (int i = 0, cnt = 0; i < h && cnt < a - 1; i += 2) {
        for (int j = 0; j < w && cnt < a - 1; j += 2) {
            grid[i][j] = 0;
            cnt++;
        }
    }

    for (int i = h - 1, cnt = 0; i >= 0 && cnt < b - 1; i -= 2) {
        for (int j = w - 1; j >= 0 && cnt < b - 1; j -= 2) {
            grid[i][j] = 1;
            cnt++;
        }
    }

    cout << h << " " << w << endl;
    for (int i = 0; i < h; i++) {
        for (int j = 0; j < w; j++) {
            cout << (grid[i][j] == 0 ? "." : "#");
        }
        cout << endl;
    }
}
```
