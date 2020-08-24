# AtCoder Beginner Contest 041
## C - 背の順
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<pair<int, int>> a(n, make_pair(0, 0));
    for (int i = 0; i < n; i++) {
        cin >> a[i].first;
        a[i].second = i;
    }

    sort(a.begin(), a.end(), greater<pair<int, int>>());

    for (int i = 0; i < n; i++) {
        cout << a[i].second + 1 << endl;
    }
}
```
