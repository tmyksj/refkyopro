# AtCoder Beginner Contest 170
## C - Forbidden List
```cpp
#include <iostream>
#include <set>

using namespace std;

int main() {
    int x, n;
    cin >> x >> n;

    set<int> p;
    for (int i = 0; i < n; i++) {
        int pi;
        cin >> pi;
        p.insert(pi);
    }

    int res = 0;
    for (int i = 0; ; i++) {
        if (p.find(x - i) == p.end()) {
            res = x - i;
            break;
        } else if (p.find(x + i) == p.end()) {
            res = x + i;
            break;
        }
    }

    cout << res << endl;
}
```
