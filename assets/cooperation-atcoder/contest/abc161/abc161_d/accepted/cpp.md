# AtCoder Beginner Contest 161
## D - Lunlun Number
```cpp
#include <algorithm>
#include <iostream>
#include <set>

using namespace std;

int main() {
    int k;
    cin >> k;

    set<long long> cur;
    for (int i = 1; i <= 9; i++) {
        cur.insert(i);
    }

    set<long long> s;
    while (static_cast<int>(s.size()) < k) {
        for (set<long long>::iterator j = cur.begin(); j != cur.end(); j++) {
            s.insert(*j);
        }

        set<long long> next;
        for (set<long long>::iterator j = cur.begin(); j != cur.end(); j++) {
            next.insert(10 * *j + max((*j % 10) - 1, 0LL));
            next.insert(10 * *j + (*j % 10));
            next.insert(10 * *j + min((*j % 10) + 1, 9LL));
        }

        cur = next;
    }

    set<long long>::iterator res = s.begin();
    for (int i = 0; i < k - 1; i++) {
        res++;
    }

    cout << *res << endl;
}
```
