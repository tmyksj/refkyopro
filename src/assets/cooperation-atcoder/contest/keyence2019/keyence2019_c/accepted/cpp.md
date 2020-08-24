# キーエンス プログラミング コンテスト 2019
## C - Exam and Wizard
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    vector<int> b(n);
    for (int i = 0; i < n; i++) {
        cin >> b[i];
    }

    vector<long long> c(n);
    for (int i = 0; i < n; i++) {
        c[i] = a[i] - b[i];
    }

    sort(c.begin(), c.end());
    sort(lower_bound(c.begin(), c.end(), 0), c.end(), greater<long long>());
    for (int i = 1; i < n; i++) {
        c[i] += c[i - 1];
    }

    vector<long long>::iterator r = lower_bound(c.begin(), c.end(), 0);
    cout << (r == c.begin() ? 0 : (r != c.end() ? r - c.begin() + 1 : -1)) << endl;
}
```
