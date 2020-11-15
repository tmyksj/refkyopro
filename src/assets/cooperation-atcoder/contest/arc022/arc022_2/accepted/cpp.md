# AtCoder Regular Contest 022
## B - 細長いお菓子
```cpp
#include <algorithm>
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

    int res = 0;

    vector<int> b(*max_element(a.begin(), a.end()) + 1, -1);
    for (int i = 0, j = -1; i < n; i++) {
        j = max(j, b[a[i]]);
        res = max(res, i - j);
        b[a[i]] = i;
    }

    cout << res << endl;
}
```
