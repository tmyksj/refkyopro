# AtCoder Beginner Contest 091
## B - Two Colors Card Game
```cpp
#include <iostream>
#include <map>

using namespace std;

int main() {
    int n;
    cin >> n;

    map<string, int> profit;
    for (int i = 0; i < n; i++) {
        string s;
        cin >> s;
        profit[s]++;
    }

    int m;
    cin >> m;

    for (int i = 0; i < m; i++) {
        string t;
        cin >> t;
        profit[t]--;
    }

    int res = 0;
    for (map<string, int>::iterator i = profit.begin(); i != profit.end(); i++) {
        if (res < i->second) {
            res = i->second;
        }
    }

    cout << res << endl;
}
```
