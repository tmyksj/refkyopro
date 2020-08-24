# AtCoder Beginner Contest 155
## C - Poll
```cpp
#include <algorithm>
#include <iostream>
#include <map>

using namespace std;

int main() {
    int n;
    cin >> n;

    map<string, int> s;
    for (int i = 0; i < n; i++) {
        string si;
        cin >> si;
        s[si]++;
    }

    int c = 0;
    for (map<string, int>::iterator i = s.begin(); i != s.end(); i++) {
        c = max(c, i->second);
    }

    for (map<string, int>::iterator i = s.begin(); i != s.end(); i++) {
        if (i->second == c) {
            cout << i->first << endl;
        }
    }
}
```
