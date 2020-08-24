# AtCoder Beginner Contest 082
## C - Good Sequence
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
        cnt[a]++;
    }

    int res = 0;
    for (map<int, int>::iterator i = cnt.begin(); i != cnt.end(); i++) {
        if (i->first > i->second) {
            res += i->second;
        } else {
            res += i->second - i->first;
        }
    }

    cout << res << endl;
}
```
