# AtCoder Beginner Contest 117
## C - Streamline
```cpp
#include <algorithm>
#include <cmath>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<int> x(m);
    for (int i = 0; i < m; i++) {
        cin >> x[i];
    }

    sort(x.begin(), x.end());

    vector<long long> diff(m - 1);
    for (int i = 0; i < m - 1; i++) {
        diff[i] = abs(x[i] - x[i + 1]);
    }

    sort(diff.begin(), diff.end());

    long long cost = 0;
    for (int i = 0; i < m - n; i++) {
        cost += diff[i];
    }

    cout << cost << endl;
}
```
