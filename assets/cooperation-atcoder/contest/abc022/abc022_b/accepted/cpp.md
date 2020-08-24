# AtCoder Beginner Contest 022
## B - Bumble Bee
```cpp
#include <iostream>
#include <set>

using namespace std;

int main() {
    int n;
    cin >> n;

    int res = 0;
    set<int> s;
    for (int i = 0; i < n; i++) {
        int a;
        cin >> a;

        if (s.find(a) == s.end()) {
            s.insert(a);
        } else {
            res++;
        }
    }

    cout << res << endl;
}
```
