# AtCoder Beginner Contest 022
## D - Big Bang
```cpp
#include <algorithm>
#include <cmath>
#include <iomanip>
#include <iostream>
#include <numeric>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> ax(n), ay(n);
    for (int i = 0; i < n; i++) {
        cin >> ax[i] >> ay[i];
    }

    vector<int> bx(n), by(n);
    for (int i = 0; i < n; i++) {
        cin >> bx[i] >> by[i];
    }

    double axg = accumulate(ax.begin(), ax.end(), 0LL) / static_cast<double>(n);
    double ayg = accumulate(ay.begin(), ay.end(), 0LL) / static_cast<double>(n);
    double bxg = accumulate(bx.begin(), bx.end(), 0LL) / static_cast<double>(n);
    double byg = accumulate(by.begin(), by.end(), 0LL) / static_cast<double>(n);

    vector<double> ad(n), bd(n);
    for (int i = 0; i < n; i++) {
        ad[i] = sqrt((ax[i] - axg) * (ax[i] - axg) + (ay[i] - ayg) * (ay[i] - ayg));
        bd[i] = sqrt((bx[i] - bxg) * (bx[i] - bxg) + (by[i] - byg) * (by[i] - byg));
    }

    double admax = *max_element(ad.begin(), ad.end());
    double bdmax = *max_element(bd.begin(), bd.end());

    cout << setprecision(12) << fixed << bdmax / admax << endl;
}
```
