# AtCoder Beginner Contest 088
## B - Card Game for Two
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

    sort(a.begin(), a.end(), greater<int>());

    int res = 0;
    for (int i = 0; i < n; i++) {
        if (i % 2 == 0) {
            res += a[i];
        } else {
            res -= a[i];
        }
    }

    cout << res << endl;
}
```
