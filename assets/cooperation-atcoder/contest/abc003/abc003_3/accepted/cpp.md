# AtCoder Beginner Contest 003
## C - AtCoderプログラミング講座
```cpp
#include <algorithm>
#include <functional>
#include <iomanip>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<int> r(n);
    for (int i = 0; i < n; i++) {
        cin >> r[i];
    }

    sort(r.begin(), r.end(), greater<int>());

    double res = 0, b = 2;
    for (int i = 0; i < k; i++, b *= 2) {
        res += r[i] / b;
    }

    cout << setprecision(12) << fixed << res << endl;
}
```
