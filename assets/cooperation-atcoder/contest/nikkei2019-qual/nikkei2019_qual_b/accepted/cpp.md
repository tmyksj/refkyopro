# 全国統一プログラミング王決定戦予選
## B - Touitsu
```cpp
#include <iostream>
#include <set>
#include <string>

using namespace std;

int main() {
    int n;
    string a, b, c;
    cin >> n >> a >> b >> c;

    int res = 0;
    for (int i = 0; i < n; i++) {
        set<int> s;
        s.insert(a[i]);
        s.insert(b[i]);
        s.insert(c[i]);
        res += s.size() - 1;
    }

    cout << res << endl;
}
```
