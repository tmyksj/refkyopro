# AtCoder Beginner Contest 118
## B - Foods Loved by Everyone
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<int> cnt(m, 0);
    for (int i = 0; i < n; i++) {
        int k;
        cin >> k;

        for (int j = 0; j < k; j++) {
            int a;
            cin >> a;
            cnt[a - 1]++;
        }
    }

    int sum = 0;
    for (int i = 0; i < m; i++) {
        if (cnt[i] == n) {
            sum++;
        }
    }

    cout << sum << endl;
}
```
