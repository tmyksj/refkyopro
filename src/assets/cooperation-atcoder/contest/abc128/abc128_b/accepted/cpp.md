# AtCoder Beginner Contest 128
## B - Guidebook
```cpp
#include <algorithm>
#include <iostream>
#include <utility>
#include <vector>

using namespace std;

bool restaurant_comp(const pair<int, pair<string, int>>& r1,
                     const pair<int, pair<string, int>>& r2) {
    return r1.second.first != r2.second.first ?
            r1.second.first < r2.second.first : r1.second.second > r2.second.second;
}

int main() {
    int n;
    cin >> n;

    vector<pair<int, pair<string, int>>> restaurant(n);
    for (int i = 0; i < n; i++) {
        string s;
        int p;
        cin >> s >> p;
        restaurant[i] = make_pair(i + 1, make_pair(s, p));
    }

    sort(restaurant.begin(), restaurant.end(), restaurant_comp);

    for (int i = 0; i < n; i++) {
        cout << restaurant[i].first << endl;
    }
}
```
