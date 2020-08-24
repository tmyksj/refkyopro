# AtCoder Beginner Contest 117
## B - Polygon
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> l(n);
    for (int i = 0; i < n; i++) {
        cin >> l[i];
    }

    sort(l.begin(), l.end());

    int l_sum = 0;
    for (int i = 0; i < n - 1; i++) {
        l_sum += l[i];
    }

    cout << (l_sum > l[n - 1] ? "Yes" : "No") << endl;
}
```
