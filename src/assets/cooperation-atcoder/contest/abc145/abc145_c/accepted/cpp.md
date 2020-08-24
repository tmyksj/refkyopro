# AtCoder Beginner Contest 145
## C - Average Length
```cpp
#include <algorithm>
#include <cmath>
#include <iomanip>
#include <iostream>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<pair<int, int>> xy(n);
    for (int i = 0; i < n; i++) {
        cin >> xy[i].first >> xy[i].second;
    }

    sort(xy.begin(), xy.end());

    double r1 = 0;
    int r2 = 0;
    do {
        for (int i = 1; i < n; i++) {
            r1 += sqrt((xy[i - 1].first - xy[i].first) * (xy[i - 1].first - xy[i].first)
                    + (xy[i - 1].second - xy[i].second) * (xy[i - 1].second - xy[i].second));
        }
        r2++;
    } while (next_permutation(xy.begin(), xy.end()));

    cout << setprecision(12) << fixed << r1 / r2 << endl;
}
```
