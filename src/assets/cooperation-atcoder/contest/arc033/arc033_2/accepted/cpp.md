# AtCoder Regular Contest 033
## B - メタ構文変数
```cpp
#include <iomanip>
#include <iostream>
#include <set>

using namespace std;

int main() {
    int n_a, n_b;
    cin >> n_a >> n_b;

    set<int> st_a;
    for (int i = 0; i < n_a; i++) {
        int a;
        cin >> a;
        st_a.insert(a);
    }

    set<int> st_b;
    for (int i = 0; i < n_b; i++) {
        int b;
        cin >> b;
        st_b.insert(b);
    }

    set<int> st_c;
    for (set<int>::iterator i = st_a.begin(); i != st_a.end(); i++) {
        st_c.insert(*i);
    }
    for (set<int>::iterator i = st_b.begin(); i != st_b.end(); i++) {
        st_c.insert(*i);
    }

    cout << setprecision(12) << fixed
            << (st_a.size() + st_b.size() - st_c.size()) / static_cast<double>(st_c.size()) << endl;
}
```
