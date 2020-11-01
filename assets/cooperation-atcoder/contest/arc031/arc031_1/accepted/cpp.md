# AtCoder Regular Contest 031
## A - 名前
```cpp
#include <algorithm>
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    cin >> s;

    string t = s;
    reverse(t.begin(), t.end());

    cout << (s == t ? "YES" : "NO") << endl;
}
```
