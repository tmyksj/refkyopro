# AtCoder Beginner Contest 064
## C - Colorful Leaderboard
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> color(9, 0);
    for (int i = 0; i < n; i++) {
        int a;
        cin >> a;
        color[min(a / 400, 8)]++;
    }

    int r = 0;
    for (int i = 0; i < 8; i++) {
        if (color[i] > 0) {
            r++;
        }
    }

    cout << (r + (r == 0 && color[8] > 0 ? 1 : 0)) << " " << (r + color[8]) << endl;
}
```
