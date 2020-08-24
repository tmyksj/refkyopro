# AtCoder Beginner Contest 036
## C - 座圧
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(n), s(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
        s[i] = a[i];
    }

    sort(s.begin(), s.end());
    s.erase(unique(s.begin(), s.end()), s.end());

    for (int i = 0; i < n; i++) {
        cout << lower_bound(s.begin(), s.end(), a[i]) - s.begin() << endl;
    }
}
```
