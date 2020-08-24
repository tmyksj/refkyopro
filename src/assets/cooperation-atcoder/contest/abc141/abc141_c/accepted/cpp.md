# AtCoder Beginner Contest 141
## C - Attack Survival
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, k, q;
    cin >> n >> k >> q;

    vector<int> cnt(n, 0);
    for (int i = 0; i < q; i++) {
        int a;
        cin >> a;
        cnt[a - 1]++;
    }

    for (int i = 0; i < n; i++) {
        cout << (k - (q - cnt[i]) > 0 ? "Yes" : "No") << endl;
    }
}
```
