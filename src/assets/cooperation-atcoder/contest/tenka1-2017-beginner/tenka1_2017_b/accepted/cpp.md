# Tenka1 Programmer Beginner Contest
## B - Different Distribution
```cpp
#include <algorithm>
#include <iostream>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<pair<int, int>> c(n);
    for (int i = 0; i < n; i++) {
        int a, b;
        cin >> a >> b;
        c[i] = make_pair(a, b);
    }

    sort(c.begin(), c.end());

    cout << c[n - 1].first + c[n - 1].second << endl;
}
```
