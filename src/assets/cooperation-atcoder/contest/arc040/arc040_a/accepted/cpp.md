# AtCoder Regular Contest 040
## A - 床塗り
```cpp
#include <iostream>
#include <map>
#include <string>

using namespace std;

int main() {
    int n;
    cin >> n;

    map<int, int> m;
    for (int i = 0; i < n; i++) {
        string s;
        cin >> s;

        for (int j = 0; j < n; j++) {
            m[s[j]]++;
        }
    }

    cout << (m['R'] < m['B'] ? "AOKI" : (m['R'] == m['B'] ? "DRAW" : "TAKAHASHI")) << endl;
}
```
