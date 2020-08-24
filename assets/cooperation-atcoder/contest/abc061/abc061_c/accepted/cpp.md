# AtCoder Beginner Contest 061
## C - Big Array
```cpp
#include <algorithm>
#include <iostream>
#include <utility>
#include <vector>

using namespace std;

int main() {
    long long n, k;
    cin >> n >> k;

    vector<pair<long long, long long>> ab(n, make_pair(0, 0));
    for (int i = 0; i < n; i++) {
        cin >> ab[i].first >> ab[i].second;
    }

    sort(ab.begin(), ab.end());

    long long res = 0;
    for (long long i = 0, j = 0; i < n && j < k; i++, j += ab[i - 1].second) {
        res = ab[i].first;
    }

    cout << res << endl;
}
```
