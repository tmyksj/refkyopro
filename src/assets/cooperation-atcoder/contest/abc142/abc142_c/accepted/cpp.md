# AtCoder Beginner Contest 142
## C - Go to School
```cpp
#include <algorithm>
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
        a[i].second = i + 1;
    }

    sort(a.begin(), a.end());

    for (int i = 0; i < n; i++) {
        cout << (i == 0 ? "" : " ") << a[i].second;
    }
    cout << endl;
}
```
