# AtCoder Beginner Contest 175
## B - Making Triangle
```cpp
#include <iostream>
#include <iterator>
#include <map>

using namespace std;

int main() {
    int n;
    cin >> n;

    map<int, int> m;
    for (int i = 0; i < n; i++) {
        int l;
        cin >> l;
        m[l]++;
    }

    int res = 0;
    for (map<int, int>::iterator i = m.begin(); i != m.end(); i++) {
        for (map<int, int>::iterator j = next(i); j != m.end(); j++) {
            for (map<int, int>::iterator k = next(j); k != m.end(); k++) {
                if (i->first != j->first && j->first != k->first && i->first + j->first > k->first) {
                    res += i->second * j->second * k->second;
                }
            }
        }
    }

    cout << res << endl;
}
```
