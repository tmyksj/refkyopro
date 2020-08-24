# 第6回 ドワンゴからの挑戦状 予選
## A - Falling Asleep
```cpp
#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<string> s(n);
    vector<int> t(n);
    for (int i = 0; i < n; i++) {
        cin >> s[i] >> t[i];
    }

    string x;
    cin >> x;

    int res = 0;
    for (int i = 0, j = 0; i < n; i++) {
        res += j * t[i];
        if (x == s[i]) {
            j = 1;
        }
    }

    cout << res << endl;
}
```
