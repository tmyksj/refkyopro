# AtCoder Beginner Contest 081
## C - Not so Diverse
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<int> cnt(n, 0);
    for (int i = 0; i < n; i++) {
        int a;
        cin >> a;
        cnt[a - 1]++;
    }

    sort(cnt.begin(), cnt.end());

    int res = 0;
    for (int i = 0; i < n - k; i++) {
        res += cnt[i];
    }

    cout << res << endl;
}
```
