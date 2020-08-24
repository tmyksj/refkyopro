# AtCoder Beginner Contest 072
## C - Together
```cpp
#include <algorithm>
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

        cnt[a - 1]++;
        cnt[a]++;
        cnt[a + 1]++;
    }

    int res = 0;
    for (map<int, int>::iterator i = cnt.begin(); i != cnt.end(); i++) {
        res = max(res, i->second);
    }

    cout << res << endl;
}
```
