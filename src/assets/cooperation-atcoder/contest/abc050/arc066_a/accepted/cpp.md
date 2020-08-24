# AtCoder Beginner Contest 050
## C - Lining Up
```cpp
#include <iostream>
#include <map>

using namespace std;

int main() {
    int n;
    cin >> n;

    map<int, int> cnt;
    for (int i = 0; i < n; i++) {
        int a;
        cin >> a;
        cnt[a]++;
    }

    long long res = ((n % 2 == 0 && cnt[0] == 0) || (n % 2 != 0 && cnt[0] == 1) ? 1 : 0);
    for (int i = (n % 2 == 0 ? 1 : 2); i <= n; i += 2) {
        if (cnt[i] == 2) {
            res *= 2;
            res %= 1000000007;
        } else {
            res = 0;
        }
    }

    cout << res << endl;
}
```
