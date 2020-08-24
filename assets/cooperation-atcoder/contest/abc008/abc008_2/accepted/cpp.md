# AtCoder Beginner Contest 008
## B - 投票
```cpp
#include <iostream>
#include <map>
#include <string>

using namespace std;

int main() {
    int n;
    cin >> n;

    map<string, int> m;
    for (int i = 0; i < n; i++) {
        string s;
        cin >> s;
        m[s]++;
    }

    string res = "";
    for (map<string, int>::iterator i = m.begin(); i != m.end(); i++) {
        if (m[res] < i->second) {
            res = i->first;
        }
    }

    cout << res << endl;
}
```
