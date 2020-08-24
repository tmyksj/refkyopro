# AtCoder Beginner Contest 026
## B - N重丸
```cpp
#include <algorithm>
#include <functional>
#include <iomanip>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    const double pi = 3.14159265358979323846264338327950288;

    int n;
    cin >> n;

    vector<int> r(n);
    for (int i = 0; i < n; i++) {
        cin >> r[i];
    }

    sort(r.begin(), r.end(), greater<int>());

    long long res = 0;
    for (int i = 0; i < n; i++) {
        res += (i % 2 == 0 ? 1 : -1) * r[i] * r[i];
    }

    cout << setprecision(12) << fixed << res * pi << endl;
}
```
