# AtCoder Beginner Contest 085
## D - Katana Thrower
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, h;
    cin >> n >> h;

    vector<int> a(n), b(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i] >> b[i];
    }

    sort(a.begin(), a.end(), greater<int>());
    sort(b.begin(), b.end(), greater<int>());

    int dmg = 0, res = 0;
    for (int i = 0; i < n && a[0] < b[i] && dmg < h; i++) {
        dmg += b[i];
        res++;
    }

    if (dmg < h) {
        res += (h - dmg + a[0] - 1) / a[0];
    }

    cout << res << endl;
}
```
