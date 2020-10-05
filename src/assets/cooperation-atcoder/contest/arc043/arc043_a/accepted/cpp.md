# AtCoder Regular Contest 043
## A - 点数変換
```cpp
#include <algorithm>
#include <iomanip>
#include <iostream>
#include <numeric>
#include <vector>

using namespace std;

int main() {
    long long n, a, b;
    cin >> n >> a >> b;

    vector<int> s(n);
    for (int i = 0; i < n; i++) {
        cin >> s[i];
    }

    long long s_max = *max_element(s.begin(), s.end());
    long long s_min = *min_element(s.begin(), s.end());
    long long s_sum = accumulate(s.begin(), s.end(), 0LL);

    if ((s_max - s_min == 0) == (b == 0)) {
        double p = (s_max - s_min == 0 ? 1 : static_cast<double>(b) / (s_max - s_min));
        double q = (a * n - p * s_sum) / n;
        cout << setprecision(12) << fixed << p << " " << q << endl;
    } else {
        cout << "-1" << endl;
    }
}
```
