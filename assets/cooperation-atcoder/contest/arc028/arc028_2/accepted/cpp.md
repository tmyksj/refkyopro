# AtCoder Regular Contest 028
## B - 特別賞
```cpp
#include <iostream>
#include <set>
#include <utility>
#include <vector>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<int> x(n);
    for (int i = 0; i < n; i++) {
        cin >> x[i];
    }

    set<pair<int, int>> st;
    for (int i = 0; i < k; i++) {
        st.insert(make_pair(x[i], i));
    }

    set<pair<int, int>>::reverse_iterator i = st.rbegin();
    cout << i->second + 1 << endl;

    for (int j = k; j < n; j++) {
        if (i->first > x[j]) {
            st.insert(make_pair(x[j], j));
            i++;
        }

        cout << i->second + 1 << endl;
    }
}
```
