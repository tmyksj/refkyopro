# AtCoder Beginner Contest 028
## C - 数を3つ選ぶマン
```cpp
#include <algorithm>
#include <iostream>
#include <set>

using namespace std;

int main() {
    int a, b, c, d, e;
    cin >> a >> b >> c >> d >> e;

    set<int> s;
    s.insert(a + b + c);
    s.insert(a + b + d);
    s.insert(a + b + e);
    s.insert(a + c + d);
    s.insert(a + c + e);
    s.insert(a + d + e);
    s.insert(b + c + d);
    s.insert(b + c + e);
    s.insert(b + d + e);
    s.insert(c + d + e);

    set<int>::reverse_iterator i = s.rbegin();
    i++;
    i++;

    cout << *i << endl;
}
```
