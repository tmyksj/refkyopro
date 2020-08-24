# AtCoder Beginner Contest 121
## C - Energy Drink Collector
```cpp
#include <algorithm>
#include <iostream>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<pair<long long, long long>> ab(n, make_pair(0, 0));
    for (int i = 0; i < n; i++) {
        cin >> ab[i].first >> ab[i].second;
    }

    sort(ab.begin(), ab.end());

    long long price = 0, sum = 0;
    for (int i = 0; i < n; i++) {
        if (sum + ab[i].second < m) {
            price += ab[i].first * ab[i].second;
            sum += ab[i].second;
        } else {
            price += ab[i].first * (m - sum);
            break;
        }
    }

    cout << price << endl;
}
```
